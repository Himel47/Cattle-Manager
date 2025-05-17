import { FormControl } from "@angular/forms";

export interface Loginform {
    userName: FormControl<string | null>;
    password: FormControl<string | null>;
}

export interface LoginInfo {
    username: string;
    password: string;
}