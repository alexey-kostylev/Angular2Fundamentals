import { OpaqueToken } from "@angular/core";
//import 'toastr';

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface Toastr {
    success(message: string, title?: string);

    info(message: string, title?: string);

    warning(message: string, title?: string);

    error(message: string, title?: string);
}

// @Injectable()
// export class ToastrService {
//     success(message: string, title?: string)
//     {
//         toastr.success(message, title);
//     }

//     info(message: string, title?: string) {
//         toastr.info(message, title);
//     }

//     warning(message: string, title?: string) {
//         toastr.warning(message, title);
//     }

//     error(message: string, title?: string) {
//         toastr.error(message, title);
//     }
// }