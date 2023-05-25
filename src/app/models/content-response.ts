export class ContentResponse{
    
    login = "";
    role_name = "";
    id_person = 0
    password = "";
    
}

export class ContentResponseToken{
    login = "";
    role = "";
    id_person = "";
    exp! : number;
    
}

export class ContentResponseMessage{
    data = "";
}