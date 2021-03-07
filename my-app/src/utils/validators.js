export const required = (value)=>{
   return  value ? undefined: "Обязательное поле"
}

export const minLengthCreator = (length)=>{
   return (value)=>{
      return value.length<length ?`Минимальное количество знаков ${length}`:undefined;
   }
}

export const isValidEmail = (value) =>{
   if(!value)
   return undefined;
   
   let res = value?.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
   return (res !== null)? undefined:"Невалидный Email"
 };

 export const isValidValuePass = (value) =>{
   if(!value)
   return undefined;
   
   let res = value?.match(/^[a-zA-Z0-9]+$/);
   return (res !== null)? undefined:"Можно использовать цифры и латинские буквы"
 }