function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRa now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));