console.log(`person1: shows ticket`);
console.log(`person2: shows ticket`);

 const preMovie = async () => {
    
    const promiseWifeBringTickets = new Promise ( (resolve, reject) => {
        setTimeout ( () => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve ('popcorn'));
    const addbutter = new Promise((resolve, reject) => resolve ('butter'));
    const addcoldrinks = new Promise((resolve, reject) => resolve ('coldDrinks'));

    let ticket = await promiseWifeBringTickets;

    console.log(`wife: i have ${ticket}`)
   console.log(`husband: we should go in`);
   console.log(`wife: no i am hungry`);

   let popcorn = await getPopcorn;

   console.log(`husband: i got some ${popcorn}`);
   console.log(`husband: we should go in`);
   console.log(`wife: no i need some butter on my popcorn`);

   let butter = await addbutter;

   console.log(`husband: i have ${butter} also`)
    console.log(`husband: we should go in`);
    console.log(`wife: no i need some coldDrinks`);

    let coldDrinks = await addcoldrinks;

    console.log(`husband: i got ${coldDrinks} `)
    console.log(`husband: anythimg else darling? `)
    console.log(`wife: lets got we are getting late `)
    console.log(`husband: thank you for reminder *grins*`);

    return ticket;
 }

preMovie().then( (m) => console.log(`person3: shows ${m}`));

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);