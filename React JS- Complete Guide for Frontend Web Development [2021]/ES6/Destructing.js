const nm = "Arman Ali Khan"
        const nArr = nm.split(" ")
            // old way
                //    let firstName = nArr[0]
                //    let middleName = nArr[1]
                //    let lastName = nArr[2]
                //    console.log(firstName)
                //    console.log(middleName)
                //    console.log(lastName)
            // new way 
               let [firstName, middleName, lastName] = nArr
               console.log(firstName)
               console.log(middleName)
               console.log(lastName)
        const friends = {
            frnd1 : "Arman",
            frnd2 : "Rattu",
            frnd3 : "Ayush"
        }
        let {frnd1, frnd2 , frnd3} = friends;
        console.log(frnd1)
        console.log(frnd2)
        console.log(frnd3)

        let n1 = "lorem"
        let n2 = "dolar"
        let n3 = "ipsum"
        const exmp = {
            n1,    // same as n1: n1;
            n2,    // same as n2: n2;
            n3,    // same as n3: n3;
        }
        console.log(exmp)