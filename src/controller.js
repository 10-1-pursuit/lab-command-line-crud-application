//// CRUD Applicatiom
/*

C reate
R ead
U pdate
D elete/Destroy

*/

const { nanoid } = require("nanoid");
inform = console.log;

///Reading
function index(guest) {
    guest.map((eachGuest) => eachGuest.id + " " + eachGuest.name).join("\n");
}

function show(arrayOfGuest, guestId) {

    const guestToFind = arrayOfGuest.find((guest) => guest.id === guestId);


    if (guestToFind) {
        return guestToFind.id + " " + guestToFind.name + " " + guestToFind.amount + " " + guestToFind.donation;
    } else {
        return "Guest Not Found"
    }
}

function create(guest, customers) {

    customers = [];
    const newObj = {
        id: nanoid(),
        name: guest,
        amount: 00,
        donation: 00
    };
    customers.push(newObj);
    console.log(customers)
    return customers;


}
create()

function destroy(guest, guestId) {

    const index = guest.findIndex((newGuest) => newGuest.id === guestId);

    if (index > -1) {
        guest.splice(index, 1);
        inform("Guest successfully removed from collection");
        return guest;
    } else {
        inform("Guest not found. No action taken");
        return guest;
    }
}

function edit(guest, guestId, updatedGuest) {
    const index = guest.findIndex((guest) => guest.id == guestId);
    if (index > -1) {
        guest[index].id = guestId;
        guest[index].name = updatedGuest;

        inform("Guest successfully updated");
        return guest;
    } else {
        inform("Guest not found. No action taken");
        return guest;
    }
}


module.exports = {
    index,
    show,
    create,
    destroy,
    edit
}