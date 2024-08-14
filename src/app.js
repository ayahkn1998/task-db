
const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'Task-db' 

mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')
  
    const db = res1.db(dbname)
    // 1 //
    // db.collection('users').insertOne({
    //     name : 'ayah',
    //     age : 25
    // },(error,data) =>{
    //     if(error){
    //         console.log("Unable to insert data")
    //     }
       
    // })
    // db.collection('users').insertOne({
    //     name : 'ahmad',
    //     age : 27
    // },(error,data) =>{
    //     if(error){
    //         console.log("Unable to insert data")
    //     }
        
    // })
    

// //     //////////////////////////////////////////////////////////////
//     db.collection ('users').insertMany([
//         {
//             name : 'noor',
//             age : 20
//         },
//         {
//             name : 'reem',
//             age : 24
//         },
//         {
//             name : 'nora',
//             age : 27
//         },
//         {
//             name : 'yarob',
//             age : 27
//         },
//         {
//             name : 'adel',
//             age : 30
//         },
//         {
//             name : 'ranem',
//             age : 27
//         },
//         {
//             name : 'rema',
//             age : 24
//         },
//         {
//             name : 'doha',
//             age : 27
//         },
//         {
//             name : 'nareen',
//             age : 27
//         },
//         {
//             name : 'lareen',
//             age : 30
//         }
//     ] , (error,data)=>{
//         if(error){
//             console.log("Unable to insert data")
//         }
//     })
//     //////////////////////////////////////////////////////////
   
    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //             if(error){
    //                 return console.log('Error has occurred')
    //             }
    //             console.log(users)
    //         })
//     /////////////////////////////////////////////////////////
    // db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
    //                 if(error){
    //                     return console.log('Error has occurred')
    //                 }
    //                 console.log(users)
    //             })
//     ///////////////////////////////////////////////////////////////
//     db.collection("users").updateOne({_id:mongodb.ObjectId("66bce76fa723662e4e11bfa4")},{
//         $set:{name: "ayat" },
//      }).
//      then((data1)=>{console.log(data1.modifiedCount)})
//      .catch((error)=> {console.log(error)})
// //      //////////////
//      db.collection("users").updateOne({_id:mongodb.ObjectId("66bce76fa723662e4e11bfa5")},{
//         $set:{name: "mohamad" },
//      }).
//      then((data1)=>{console.log(data1.modifiedCount)})
//      .catch((error)=> {console.log(error)})
//      /////////////
//      db.collection("users").updateOne({_id:mongodb.ObjectId("66bce8275e718b95b8b82102")},{
//         $set:{name: "noha" },
//      }).
//      then((data1)=>{console.log(data1.modifiedCount)})
//      .catch((error)=> {console.log(error)})
//      ////////////
//      db.collection("users").updateOne({_id:mongodb.ObjectId("66bce8275e718b95b8b82103")},{
//         $set:{name: "yaseen" },
//      }).
//      then((data1)=>{console.log(data1.modifiedCount)})
//      .catch((error)=> {console.log(error)})
//      ///////////////
//     db.collection("users").limit(4).updateMany({age:27},{
//         $inc :{age :4}
//     }).
//     then((data1)=>{console.log(data1.modifiedCount)})
//     .catch((error)=> {console.log(error)})
//     //////////////////////////////////////////////////////
    // db.collection("users").updateMany({},{
    //     $inc :{age :10}
    // }).
    // then((data1)=>{console.log(data1.modifiedCount)})
    // .catch((error)=> {console.log(error)})
//     //////////////////////////////////////////////////////////
    
    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})
})