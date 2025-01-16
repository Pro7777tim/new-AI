// new AI
const levenshteinDistance = function (str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    return dp[len1][len2];
};

const similarityStr = function (str1, str2) {
    const distance = levenshteinDistance(str1, str2);
    const maxLen = Math.max(str1.length, str2.length);
    return 1 - distance / maxLen;
};

const similarityObj = function (obj1, obj2) {
    let score = 0;
    let keys = Object.keys(obj1);

    keys.forEach((key) => {
        if (typeof obj1[key] === "string") {
            score += similarityStr(obj1[key], obj2[key] || "") * 10;
        } else if (typeof obj1[key] === "number") {
            score += 1 / (1 + Math.abs(obj1[key] - (obj2[key] || 0)));
        } else if (typeof obj1[key] === "boolean") {
            score += obj1[key] === obj2[key] ? 1 : 0;
        }
    });

    return score / keys.length;
};

const study = function (candidates, situation, isPositive) {
    candidates.forEach((candidate) => {
        if (!this.database[candidate]) {
            this.database[candidate] = { positive: [], negative: [] };
        }

        if (isPositive) {
            this.database[candidate].positive.push(situation);
        } else {
            this.database[candidate].negative.push(situation);
        }
    });
};

const candidates = function (candidates, situation) {
    return candidates.map((candidate) => {
        const candidateData = this.database[candidate] || {
            positive: [],
            negative: [],
        };

        let positiveScore = candidateData.positive.reduce((sum, pos) => {
            return sum + similarityObj(pos, situation);
        }, 0);

        let negativeScore = candidateData.negative.reduce((sum, neg) => {
            return sum + similarityObj(neg, situation);
        }, 0);

        const rating = positiveScore - negativeScore;

        return {
            name: candidate,
            rating: Math.round(rating * 100) / 100,
        };
    });
};

const answer = function (candidates) {
    if (!candidates.length) {
        return null;
    }

    let biggest = candidates[0];
    candidates.forEach((element) => {
        if (element.rating > biggest.rating) {
            biggest = element;
        }
    });

    return biggest.name;
};

const AI = function () {
    this.database = {};
    this.study = study;
    this.candidates = candidates;
    this.answer = answer;
    this.similarityObj = similarityObj;
};

export { AI };
