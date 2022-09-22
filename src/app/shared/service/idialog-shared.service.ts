export interface IDialogSharedService {
    openDialog : (component:any, height:string, width:string, data?:any) => void;
    closeDialog : ()=> void;
}