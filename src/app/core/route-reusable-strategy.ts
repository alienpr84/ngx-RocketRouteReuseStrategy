import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
export class RouteReusableStrategy extends RouteReuseStrategy {
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle | null): void {}

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    
    // here I get the end route child 'cause it is necesary for comparing
    let currTemp = curr;
     
    while(currTemp.firstChild){
      currTemp = currTemp.firstChild;
    }

     // if this route is set to true then I go to reuse it
     let componentTest = null;
     if(currTemp.data.reuse) { componentTest = currTemp.component}

     return (curr.component === future.component) && (curr.component !== componentTest);

      // return future.routeConfig === curr.routeConfig || future.data.reuse;
     
  }
}
