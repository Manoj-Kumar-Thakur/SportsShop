class Customer{
    constructor(name,email,contactNo,dob){
        this.name=name;
        this.email=email;
        this.contactNo=contactNo;
        this.dob=dob;
        
    }
    setName(name){
        this.name=name;
    }
    setEmail(email){
        this.email=email;
    }
    setContactNo(contactNo){
        this.contactNo=contactNo;
    }
    setDob(dob){
        this.dob=dob;
    }
    getName(){
       return this.name;
    }
    getEmail(){
        return this.email;
    }
    getContactNo(){
        return this.contactNo;
    }
    getDob(){
        return this.dob;
    }
    
}