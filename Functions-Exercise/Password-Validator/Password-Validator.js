    function solve(password) {

        function isValidPassLength(passLength) {
            let isValid = true;

            if (passLength < 6 || passLength > 10) {
                isValid = false;
            }
            return isValid;
        }

        function isBetweenRange(ch, start, end) {
            return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
        }

        function containsOnlyLetterAndDigits(password) {
            let isValid = true;

            for (const ch of password) {
                if (!(
                    isBetweenRange(ch, 'A', 'Z') ||
                    isBetweenRange(ch, 'A', 'Z') || 
                    isBetweenRange(ch, 'A', 'Z'))) {
                        isValid = false;
                    }
            }
            return isValid;
        }

        function containLeastTwoDigits(password) {
            let digCounter = 0;

            for (const ch of password) {
                if (isBetweenRange (ch, '0', '9')) {
                    digCounter++

                    if (digCounter === 2) {
                        break;
                    }
                }
            }
            return digCounter === 2 ? true : false;
        }


        let isValidPassLengthVal = isValidPassLength(password.passLength);
        if (!isValidPassLengthVal) {
            console.log(`Password must be between 6 and 10 characters`)
        }
        
        let containsOnlyLetterAndDigitsVal = containsOnlyLetterAndDigits(password);
        if (!containsOnlyLetterAndDigitsVal){
            console.log(`Password must consist only of letters and digits`)
        }

        let containLeastTwoDigitsVal = containLeastTwoDigits(password);
        if (!containLeastTwoDigitsVal) {
            console.log(`Password must have at least 2 digits`)
        }

        if (isValidPassLengthVal && containsOnlyLetterAndDigitsVal && containsOnlyLetterAndDigitsVal) {
            console.log(`Password is valid`)
        }
    }