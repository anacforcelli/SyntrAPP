export interface User {
    id : number,
    createdAt : Date,
    name : string,
    photo : string,
    password : string,
    email : string,
    CPF : number,
    number_phone : number,
}

export interface Farm {
    id : number,
    userID : number,
    createdAt : Date,
    farm_name : string,
}

export interface Space {
    id : number,
    createdAt : Date,
    X : number[],
    Y : number[],
    type : number,
    figures : number,
    width : number,
    length : number,
    climate : string,
    water_proximity : number,
}

export interface SAF {
    id : number,
    space_id : number,
    createdAT : Date,
    name : string,
    area : number,
    line_quantity : number,
    line_width : number,
    interline_width : number,
}

export interface Plant_allocated {
    id : number,
    SAF_space_id : number,
    lines_allocated : number,
    initial_moment : Date,
    plant_quantity : number,
}

export interface Task {
    id : number,
    plant_id : number,
    name : string,
    description : string,
}

export interface Worker extends User {
    state : boolean,
    UserId : number,
}