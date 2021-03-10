export let dataMonth = (value) => {
    const dataMonth = [{ name: "Январь", number: 1 }, { name: "Февраль", number: 2 }, { name: "Март", number: 3 }, { name: "Апрель", number: 4 }, { name: "Май", number: 5 }, { name: "Июнь", number: 6 }, { name: "Июль", number: 7 }, { name: "Август", number: 8 }, { name: "Сентябрь", number: 9 }, { name: "Октябрь", number: 10 }, { name: "Ноябрь", number: 11 }, { name: "Декабрь", number: 12 }]
    if(value === 0)
    return dataMonth;
    else return dataMonth[Number(value)-1]
}