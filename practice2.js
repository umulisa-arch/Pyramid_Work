let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

function showContact(contacts, index) {
    if (contacts instanceof Array && contacts[index]) {
        console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        for (const contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

function sortContactsBy(property) {
    if (contacts instanceof Array) {
        contacts.sort((a, b) => {
            if (a[property] > b[property]) {
                return 1;
            } else if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
        console.log("Contacts sorted by", property);
        showAllContacts(contacts);
    }
}

// Example usage:
// Add new contact
addNewContact(contacts, "John Doe", "123456789", "john@example.com\n");

// Sort contacts by name
sortContactsBy("name\n");

// Sort contacts by phone
sortContactsBy("phone\n");

// Sort contacts by email
sortContactsBy("email\n");
