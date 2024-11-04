import { Inject, Injectable,InjectionToken } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => window.localStorage
});
@Injectable({
  providedIn: "root",
})
export class StateService {

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage){
  }

  private readonly _sidebarOpen = new BehaviorSubject<boolean>(true);
  readonly sidebarOpen$ = this._sidebarOpen.asObservable();
  get sidebarOpen(): boolean {
    return this._sidebarOpen.getValue();
  }
  private set sidebarOpen(val: boolean) {
    this._sidebarOpen.next(val);
  }

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen
  }

  private readonly _darkMode = new BehaviorSubject<boolean>(true);
  readonly darkMode$ = this._darkMode.asObservable();
  get darkMode(): boolean {
    return this._darkMode.getValue();
  }
  private set darkMode(val: boolean) {
    this._darkMode.next(val);
  }

  toggleDarkmode(){
    this.darkMode = !this.darkMode
  }

}
