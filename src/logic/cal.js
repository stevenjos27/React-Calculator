import isNumber from './isNumber';
//import Big from 'big.js';
import operate from './operate';

export default function cal(objD, btnName) {
    debugger;
    if (btnName === "AC") {
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    // For numbers
    if (isNumber(btnName)) {
        if (btnName === "0" && objD.next === "0") {
            return {};
        }

        if (!objD.next) {
            return { next: btnName };
        }

        if (objD.next && !objD.operation) {
            return { next: objD.next + btnName };
        }

        if (objD.next && objD.operation && objD.total) {
            return { next: objD.next + btnName };
        }

    }

    if (btnName === "+/-") {
        return {
            total: (-1) * objD.total,
            next: (-1) * objD.next
        };
    }

    if (btnName === "%") {
        return {
            total: (objD.total) / 100,
            next: (objD.next) / 100
        };
    }

    if (btnName === ".") {
        if (objD.next) {
            // ignore a . if the next number already has one
            if (objD.next.includes(".")) {
                return {};
            }
            return { next: objD.next + "." };
        }
        return { next: "0." };
    }

    if (btnName === "=") {
        if (objD.next && objD.operation) {
            return {
                total: operate(objD.total, objD.next, objD.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }

    if (objD.total && !objD.operation && !objD.next) {
        return {
            operation: btnName
        };
    }

    return {
        total: objD.next,
        next: null,
        operation: btnName

    };

}