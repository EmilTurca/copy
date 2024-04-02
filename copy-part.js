<script>
    const PIN = "1234"
    let pin = ""
    tries = 0
    let balance =1000000.00
    while(true) {
        pin = prompt("ENTER PIN: ")
        tries++
        if (pin ==PIN) {
            alert(`
                ACCESS GRANTED!!!\n\n
                you balance: ${balance}MDL
            `)
            let money = +prompt("WITHDRAW: ?")
            let maxmoney = 5000.00
            let minmoney = 0
            balance -= money
            if (balance <= minmoney) {
                alert("You don't have that much money on your balance sheet!!!")
            } else if (maxmoney <= money) {
                alert("MAX WITHDRAW IS " + maxmoney)
            } else {
                alert(`
                SUCCESS\n\n
                you balance: ${balance}MDL
            `)
            }
            break
        }
        else {
        alert("WRONG PIN!!!")
        if(tries == 3) {
            alert("CARD BLOCKED!!!")
        }
    }
    }
</script>
