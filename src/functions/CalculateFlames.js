export const calculateFlames = (yourName, yourCrushName, setError) => {
    if (!yourName || !yourCrushName) {
        setError('All fields are required');
        return;
    }

    let arr1 = yourName.toLowerCase().split('');
    let arr2 = yourCrushName.toLowerCase().split('');


    for (let i = 0; i < arr1.length; i++) {
        let char = arr1[i];
        let index = arr2.indexOf(char);
        if (index !== -1) {
            arr1.splice(i, 1);
            arr2.splice(index, 1);
            i--;
        }
    }
    console.log(arr1 , arr2)
    // Count remaining characters
    let totalCount = (arr1.length + arr2.length) % 7;
    // let flamesMessages1 = [
    //     "Congratulations, you two are Friends! 🤝",
    //     "Congrats! You’re Lovers now! 💕",
    //     "So sweet! You both are Affectionate! 💖",
    //     "Congrats on your Marriage! 💍",
    //     "Oh no! You two are Enemies! 😡",
    //     "You are Siblings! 👯‍♂️"
    // ];
    
    
    setError('');

    if(totalCount <= 6){
        return totalCount - 1

    }else{
        return totalCount % 7

    }
};
