const mysql = require( 'mysql' );


class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
  }
// at top INIT DB connection
const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    // password: process.env.DB_PWD,
    database: "contacts_book"
});

async function displayContacts(){
    const sql = 'SELECT * FROM contacts_book.contacts ORDER BY id';
    const allContacts = await db.query( sql );
    console.log("[ORM ALL CONTACTS] ---- running");
    return allContacts
};

async function createContact( contact ){

    let contactTest = [ contact.firstName, contact.lastName, contact.location ];
    console.log("[DATABASE INSERT]", contactTest);

    //? when creating the sql varibale the query is not being written correctly
    // const sql = ('INSERT INTO contacts (first_name,last_name,location) VALUES(?,?,?)', [ contact.firstName, contact.lastName, contact.location ]);
    // const newContact = await db.query( sql );
    // console.log("[SQL]", sql)

    const newContact = await db.query(
        'INSERT INTO contacts (first_name,last_name,location) VALUES(?,?,?)', [ contact.firstName, contact.lastName, contact.location ]
    );
  
    console.log("[NEW CONTACT]", newContact)
    return newContact
};

module.exports = {
    displayContacts,
    createContact
}