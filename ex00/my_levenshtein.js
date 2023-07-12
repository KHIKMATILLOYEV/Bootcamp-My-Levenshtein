function my_levenshtein(s1, s2) {
    let distance = 0;

    if (s1.length === s2.length) {
      for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
          distance++;
        }
      }
      return distance;
    }

    return -1
}