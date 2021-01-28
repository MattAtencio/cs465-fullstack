# cs465-fullstack
CD-465 Full Stack Development with MEAN


Architecture
  Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
    In this project Express HTML was used to serve pages up to the client on request.  JavaScript was used to insert logic/methods into the pages provided to the client to allow     some of the heavy lifting to be done by the client’s browser, reduce the load on the server, and reduce response time on requests. The SPA was used to provide all the pages     up front and upon requests certain components would be loaded into the page without every reloading the entire page. This significantly reduces calls to the server and
    increases site load speed, by only needing to call APIs to get user specific or dynamic data.
  Why did the backend use a NoSQL MongoDB database?
   	A NoSQL MongoDB database was used for speed, flexibility, and scalability. Unlike SQL databases MongoDB stores all records as documents in collections. This allows you to
    modify what you are saving to a collection, such as adding new keys, without having to modify existing data. This flexibility is good for a new site because it makes
    creating new objects easy, as well as good for scaling when you want to grow and change your site to meet customer demands. 
  
Functionality
  How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
    Where JavaScript is a scripting language, JSON is jut a file format. Conforming data to the standard JSON format allows both the back-end and front-end to know how to read 
    the data they are passing back and forth. JSON is a standard in modern development which makes it easy to integrate third party systems and APIs as well.
  Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
    Two main examples of refactoring code in this project to improve functionality were moving duplicated html code to components that could be called from each page, such as 
    the headers and footers, and updating the pages to dynamically load records from the database instead of just hard coding each record as a list item.

Testing
  Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your   understanding of methods, endpoints, and security in a full stack application.
    Methods, specifically CRUD functions, allow for a standardize approach to containing business logic in an API. Endpoints provide us with a url to access those methods, 
    either publicly or privately with some sort of authentication, such as tokens or certificates. Security. Security can be applied as either authentication or authorization. 
    This means we can add a layer of security as to who can access endpoints, as well as apply rules to what those users can access via the endpoint if they do have access.

Reflection
  How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable 
  candidate in your career field?
    Prior to starting this class, I had a high-level understanding about what each of these technologies were, but not the big picture of how they worked together. I feel like 
    through this class I polished my development skills, got a better in-depth understanding about how each of these technologies works, learned a lot of best practices for both 
    back-end and front-end development, and most importantly, have established a good grasp on how all these pieces work together. I believe this class and project has taught me 
    a lot about what full stack development is, and what I need to learn/do to become a full stack developer.
