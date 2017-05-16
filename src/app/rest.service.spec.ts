import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';

describe('RestService', () => {
  let service: RestService;
  let http: Http;

  beforeEach(() => {
    http = {
      get: (_) => Observable.of(),
    } as Http;

    service = new RestService(http);
  });

  describe('search()', () => {
    it('should set accept header on request', () => {
      const getSpy = spyOn(http, 'get').and.callThrough();
      const query = 'testQuery';

      service.search(query);

      const options = getSpy.calls.mostRecent().args[1] as RequestOptionsArgs;
      expect(options.headers.get('Accept')).toBe('application/vnd.github.v3+json');
    });

    it('should set q query parameter with query', () => {
      const getSpy = spyOn(http, 'get').and.callThrough();
      const query = 'testQuery';

      service.search(query);

      const options = getSpy.calls.mostRecent().args[1] as RequestOptionsArgs;
      const search = options.search as URLSearchParams;
      expect(search.get('q')).toBe(query);
    });

    it('should request on search repository endpoint', () => {
      const getSpy = spyOn(http, 'get').and.callThrough();
      const query = 'testQuery';

      service.search(query);

      const url = getSpy.calls.mostRecent().args[0] as string;
      expect(url).toMatch('search/repositories');
    });

    it('should map response from json', () => {
      const result = jasmine.createSpyObj('result', ['json']);
      spyOn(http, 'get').and.returnValue(Observable.of(result));
      const query = 'testQuery';

      service.search(query).subscribe();

      expect(result.json).toHaveBeenCalledTimes(1);
    });
  });
});
