// assets/script.js

function updateCharacterCount(inputId, maxLength) {
    const input = document.getElementById(inputId);
    const charCountSpan = document.getElementById(inputId + "CharCount");
    const currentCharCount = input.value.length;
    charCountSpan.innerText = currentCharCount;
    if (currentCharCount > maxLength) {
        charCountSpan.style.color = "red";
    } else {
        charCountSpan.style.color = "black";
    }
}

function checkOptimization() {
    const titleInput = document.getElementById("blogTitle").value;
    const keyword = document.getElementById("primaryKeyword").value;
    const metaDescription = document.getElementById("metaDescription").value;

    const titleLength = titleInput.length;
    const keywordFound = titleInput.toLowerCase().includes(keyword.toLowerCase());

    // Calculate clickiness score based on uppercase letters, exclamation marks, and question marks
    const uppercaseLetters = titleInput.replace(/[^A-Z]/g, "").length;
    const exclamationMarks = (titleInput.match(/!/g) || []).length;
    const questionMarks = (titleInput.match(/\?/g) || []).length;
    const clickinessScore = (uppercaseLetters * 3) + (exclamationMarks * 5) + (questionMarks * 5);

    if (titleLength >= 50 && titleLength <= 70 && keywordFound) {
        document.getElementById("resultMessage").innerText = "The blog title is optimized!";
    } else if (!keywordFound) {
        document.getElementById("resultMessage").innerText = "The blog title does not meet the optimization criteria.";
    } else {
        document.getElementById("resultMessage").innerText = "The blog title is not optimized. Ensure it is between 50 to 70 characters and includes the primary keyword.";
    }

    document.getElementById("clickinessScore").innerText = clickinessScore;

    // Explanation and suggestion based on the clickiness score
    let clickinessExplanation = "";
    if (clickinessScore < 20) {
        clickinessExplanation = "The title is not very attention-grabbing. Consider using more uppercase letters, exclamation marks, or question marks to make it stand out.";
    } else if (clickinessScore < 50) {
        clickinessExplanation = "The title is somewhat attention-grabbing, but it could be improved. Try adding more uppercase letters, exclamation marks, or question marks to increase its clickiness.";
    } else if (clickinessScore < 80) {
        clickinessExplanation = "The title is fairly attention-grabbing, but there is room for improvement. Adding a few more uppercase letters, exclamation marks, or question marks can make it even more click-worthy.";
    } else {
        clickinessExplanation = "The title is highly attention-grabbing and click-worthy! Great job!";
    }

    document.getElementById("clickinessExplanation").innerText = clickinessExplanation;

    // Calculate meta description score
    const metaDescriptionLength = metaDescription.length;
    const metaDescriptionContainsKeyword = metaDescription.toLowerCase().includes(keyword.toLowerCase());
    const metaDescriptionScore = (metaDescriptionLength >= 50 && metaDescriptionLength <= 160 && metaDescriptionContainsKeyword) ? 100 : 0;

    document.getElementById("metaDescriptionScore").innerText = metaDescriptionScore;

    // Explanation and suggestion based on the meta description score
    let metaDescriptionExplanation = "";
    if (metaDescriptionScore === 100) {
        metaDescriptionExplanation = "The meta description is optimized!";
    } else {
        metaDescriptionExplanation = "The meta description does not meet the optimization criteria. Ensure it is between 50 to 160 characters and includes the primary keyword.";
    }

    document.getElementById("metaDescriptionExplanation").innerText = metaDescriptionExplanation;
}
