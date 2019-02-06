import { data } from '../testData';
import DataApi from '../DataApi';


xdescribe('DataApi', () => {
   let api;
   
   beforeEach(() => {
      api = new DataApi(data);
   });

   it('should expose articles as an object', () => {
      const articles = api.getArticles();
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].title;

      expect(articles).toHaveProperty(articleId);
      expect(articles[articleId].title).toBe(articleTitle);
   });

   it('should expose authors as an object', () => {
      const authors = api.getAuthors();
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;
   
      expect(authors).toHaveProperty(authorId);
      expect(authors[authorId].firstName).toBe(authorFirstName);
   });

   it('2+ 2 is 4', () => {
      expect(2+2).toBe(4);
   });

   it('object assingment', () => {
      const dataa = {one: 1};
      dataa['two'] = 2;
      expect(dataa).toEqual({one: 1, two: 2});
   });

   it('adding positive numbers is not zero', () => {
      for (let a = 1; a < 10; a++) {
         for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
         }
      }
   });

   test('null', () => {
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
   });
    
   test('zero', () => {
      const z = 0;
      expect(z).not.toBeNull();
      expect(z).toBeDefined();
      expect(z).not.toBeUndefined();
      expect(z).not.toBeTruthy();
      expect(z).toBeFalsy();
   });

});