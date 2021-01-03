    function solve(data = []) {

        function isPalindrome(text) {
            let len = text.length;
            let isPalindromeVal = true;
            
            for(let i = 0; i < Math.floor(len / 2); i++) {

                if (text[i] !== text[len - 1 -i]) {
                    isPalindromeVal = false;
                    break;
                }
            }

            return isPalindromeVal;
        }

        for (const currenr of data) {
            console.log(isPalindrome(currenr.toString()))
        }
    } 