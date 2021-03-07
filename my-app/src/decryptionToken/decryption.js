//За 2 дня сложно успеть сделать все круто
//Так что остановимся на таклм простом шифровании по ключу :)
//Не обращаем внимание на сложность o(2n)

export let getDecryptionToken = (key)=>{
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    let token = "ikgdhÚjgjgmfn°ghfgÛeidl"

    while(key.length != token.length)
    {
        if(key.length<token.length)
        key += key;
        if(key.length>token.length)
        key = key.slice(0,key.length-1)
    }

    for (let i = 0; i < token.length; i++)
    token = token.replaceAt(i, String.fromCharCode(token.charCodeAt(i) - key.charCodeAt(i)))
    return token
}