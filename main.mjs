// new AI
const random = function (max) {
    return Math.floor(Math.random() * max);
};
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
    const distance = this.levenshteinDistance(str1, str2);
    const maxLen = Math.max(str1.length, str2.length);
    const precision = (1 - distance / maxLen).toFixed(2);
    if (precision >= 0.5) {
        return true;
    } else {
        return false;
    }
};
const similarityNmb = function (num1, num2, tolerance) {
    return Math.abs(num1 - num2) <= tolerance;
};
function similarityBool(bool1, bool2) {
    return bool1 == bool2;
}
const candidates = function (candidats, obj) {};
const study = function (candidats, obj, positiv, negativ) {};
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
    let range = biggest.rating - biggest.rating / 5;
    const eligibleCandidates = candidates.filter(
        (element) => element.rating >= range
    );
    eligibleCandidates.push(JSON.parse(JSON.stringify(biggest)));
    const index = this.random(eligibleCandidates.length);
    return eligibleCandidates[index]?.name || null;
};
const AI = function () {
    this.candidates = candidates;
    this.study = study;
    this.answer = answer;
    this.similarityBool = similarityBool;
    this.similarityNmb = similarityNmb;
    this.similarityStr = similarityStr;
    this.levenshteinDistance = levenshteinDistance;
    this.random = random;
    this.database = [];
};
export { AI };
