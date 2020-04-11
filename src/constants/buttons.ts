import Button from '../interfaces/button';

import updateTyped from '../functions/updateTyped';
import updateResult from '../functions/updateResult';
import onClickConditionally from '../functions/onClickConditionally';
import toggleAlertPopup from '../functions/toggleAlertPopup';

import * as Ionicons from 'ionicons/icons';

export default [
    {
        value: 'C',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, '0'),
        standard: true
    },
    {
        value: '+/-',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => {
            const textAsArray = Array.from(text);
            const trimmedTextAsArray = textAsArray.filter(val => val !== ' ');
            let finalTextAsArray: string[] = [];
            let currentIndex = 0;
            let reversedTextAsArray: string[] = [];
            let shouldMerge = false;

            for (let i = 0; i < trimmedTextAsArray.length; i++) {
                if (!isNaN(parseInt(trimmedTextAsArray[i]))) {
                    if (finalTextAsArray[currentIndex]) {
                        finalTextAsArray[currentIndex] += trimmedTextAsArray[i];
                    } else {
                        finalTextAsArray[currentIndex] = trimmedTextAsArray[i];
                    };
                } else {
                    if (i === 0) {
                        finalTextAsArray[currentIndex] = trimmedTextAsArray[i];
                        currentIndex++;
                    } else {
                        finalTextAsArray[currentIndex + 1] = trimmedTextAsArray[i];
                        currentIndex += 2;
                    };
                };
            };

            for (let i = 0; i < finalTextAsArray.length; i++) {
                if (i === 0 && finalTextAsArray[i] === '-') {
                    reversedTextAsArray[0] = ' ';
                } else if (i === 0 && !isNaN(parseInt(finalTextAsArray[i]))) {
                    shouldMerge = true;
                    reversedTextAsArray[0] = finalTextAsArray[i];
                } else {
                    if (isNaN(parseInt(finalTextAsArray[i]))) {
                        reversedTextAsArray[i] = finalTextAsArray[i] === '+' ? '-' : '+';
                    } else {
                        reversedTextAsArray[i] = finalTextAsArray[i];
                    };
                };
            };

            reversedTextAsArray.filter(val => val !== ' ').join(' ');

            let finalArray = '';

            if (shouldMerge) {
                finalArray = (["-"].concat(reversedTextAsArray)).join(' ');
            } else {
                finalArray = reversedTextAsArray.join(' ');
            };

            return finalArray;
        }),
        standard: true
    },
    {
        value: '%',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text.charAt(text.length - 2) !== '%' ? `${text} % ` : text),
        standard: true
    },
    {
        value: '÷',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text.charAt(text.length - 2) !== '/' ? `${text} / ` : text),
        divide: true
    },
    {
        value: '1',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '1' : `${text}1`)
    },
    {
        value: '2',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '2' : `${text}2`)
    },
    {
        value: '3',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '3' : `${text}3`)
    },
    {
        value: 'X',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text.charAt(text.length - 2) !== '*' ? `${text} * ` : text),
        icon: Ionicons.close
    },
    {
        value: '4',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '4' : `${text}4`)
    },
    {
        value: '5',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '5' : `${text}5`)
    },
    {
        value: '6',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '6' : `${text}6`)
    },
    {
        value: '+',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text.charAt(text.length - 2) !== '+' ? `${text} + ` : text),
        icon: Ionicons.add
    },
    {
        value: '7',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '7' : `${text}7`)
    },
    {
        value: '8',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '8' : `${text}8`)
    },
    {
        value: '9',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '9' : `${text}9`)
    },
    {
        value: '-',
        bold: true,
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '- ' : text.charAt(text.length - 2) !== '-' ? `${text} - ` : text),
        icon: Ionicons.remove
    },
    {
        value: '00',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, '0')
    },
    {
        value: '0',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text === '0' ? '0' : `${text}0`)
    },
    {
        value: '.',
        onClick: (state, dispatch) => onClickConditionally(state, dispatch, text => text.charAt(text.length - 1) !== '.' ? `${text}.` : text)
    },
    {
        value: '=',
        rounded: true,
        onClick: (state, dispatch) => {
            let doesDivingByZero = false;
            let moreThanOneExpression = false;

            if (state.typed.includes(' ') && state.typed.length > 0 && state.typed !== '') {
                for (let i = 0; i < state.typed.length; i++) {
                    if (state.typed[i] === '/' && state.typed[i + 2] === '0') {
                        doesDivingByZero = true;
                    };
                };

                for (let i = 0; i < state.result.length; i++) {
                    if (state.result[i] === '/' && state.result[i + 2] === '0') {
                        doesDivingByZero = true;
                    };
                };
            };

            if (state.typed !== '' && state.typed.length > 0) {
                if (state.result !== '' && state.result.length > 0) {
                    const stateResultTrimmed = state.result.split('').filter(val => val !== ' '); // "10 + 5" => ["1", "0", " ", "+", " ", "5"] => ["1", "0", "+", "5"]
                    let newStateResult: string[] = [];
                    let currentIndex = 0;
                    /* look for every element and check if it's a normal number or something else. Then map it to the array, so
                    that every math symbol takes new place in an array. For example: "10 + 5" => ["1", "0", " ", "+", " ", "5"] => ["10", " ", "+", " ", "5"] => ["10", "+", "5"].
                    Then check if it has more than two elements. Additionally include the case of "-" in front of standalone number value by checking if there are only */
                    for (let i = 0; i < stateResultTrimmed.length; i++) {
                        if (!isNaN(parseInt(stateResultTrimmed[i]))) {
                            // it's number, add it to the current index of an array and keep until the symbol comes
                            newStateResult[currentIndex] = newStateResult[currentIndex] !== '' && newStateResult[currentIndex] !== undefined ? `${newStateResult[currentIndex]}${stateResultTrimmed[i]}` : stateResultTrimmed[i];
                        } else {
                            // it's a symbol, add a blank string, then add symbol to the next index of an array and increase currentIndex by three
                            newStateResult[currentIndex + 1] = stateResultTrimmed[i];
                            currentIndex += 2;
                        };
                    };

                    newStateResult = newStateResult.filter(val => val !== undefined || val !== null || val !== '');

                    if (newStateResult.length > 2) {
                        moreThanOneExpression = true;
                    };
                } else {
                    const stateTypedTrimmed = state.typed.split('').filter(val => val !== ' ') // "10 + 5" => ["1", "0", " ", "+", " ", "5"] => ["1", "0", "+", "5"];
                    let newStateTyped: string[] = [];
                    let currentIndex = 0;
    
                    for (let i = 0; i < stateTypedTrimmed.length; i++) {
                        if (!isNaN(parseInt(stateTypedTrimmed[i]))) {
                            newStateTyped[currentIndex] = newStateTyped[currentIndex] !== '' && newStateTyped[currentIndex] !== undefined ? `${newStateTyped[currentIndex]}${stateTypedTrimmed[i]}` : stateTypedTrimmed[i];
                        } else {
                            newStateTyped[currentIndex + 1] = stateTypedTrimmed[i];
                            currentIndex += 2;
                        };
                    };

                    newStateTyped = newStateTyped.filter(val => val !== undefined || val !== null || val !== '');

                    if (newStateTyped.length > 2) {
                        moreThanOneExpression = true;
                    };
                };
            };

            if (!doesDivingByZero) {
                if (state.typed.includes(' ') && moreThanOneExpression && state.typed.length > 0 && state.typed !== '') {
                    if (state.result !== '' && state.result.length > 0) {
                        const { result } = state;
                        
                        dispatch(updateResult(''));
                        dispatch(updateTyped(result));
                        
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                            }, 1);
                        }).then(() => {
                            const res = eval(result) as number;
                            
                            dispatch(updateResult(`${parseFloat(res.toString().substring(0, 11))}`));
                        });
                    } else {
                        const res = eval(state.typed) as number;
    
                        dispatch(updateResult(`${parseFloat(res.toString().substring(0, 11))}`));
                    };
                };
            } else {
                dispatch(toggleAlertPopup(true));
            };
        }
    }
] as Array<Button>;