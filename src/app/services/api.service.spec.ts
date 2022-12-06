import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {   //group of test
  let service: ApiService;
  let httpController: HttpTestingController;

  let url = "http://localhost:8000/userData/",
    data: any,
    _id: number

  beforeEach(() => {                       //beforeEach is a global function in Jasmine that runs some setup code before each spec in the test suite.
    TestBed.configureTestingModule({       //TestBed Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {    //test
    expect(service).toBeTruthy();
  });
  it('should call getuserInfo and return array of users', () => {
    let mockUsers = [
      {
        "_id": "6389d82ec14b939cfd545618",
        "Username": "User",
        "Email": "user@user.com",
        "Address": "Islamabad",
        "Password": "User1234",
        "Role": "User"
      },
      {
        "_id": "6389d894c14b939cfd54563c",
        "Username": "Shahzeb",
        "Email": "shah@gmail.com",
        "Address": "karachi",
        "Password": "Shah1234",
        "Role": "User"
      },
      {
        "_id": "6389d8bac14b939cfd54563f",
        "Username": "Hassan",
        "Email": "hassan@gmail.com",
        "Address": "Multan",
        "Password": "Hassan1234",
        "Role": "Admin"
      },
      {
        "_id": "6389df14c14b939cfd545652",
        "Username": "Admin",
        "Email": "admin@admin.com",
        "Address": "Lahore",
        "Password": "Admin1234",
        "Role": "Admin"
      }
    ];
    service.getUserInfo().subscribe((res) => {
      expect(res).toEqual(mockUsers)
    });

    const req = httpController.expectOne({
      method: 'Get',
      url: `${url}`,
    });
    req.flush(mockUsers)                          //Resolve the request by returning a body plus additional HTTP information (such as response headers) if provided
  });
  it('should call postUser and add user', () => {
    let mockUsers = [
      {
        "_id": "6389d82ec14b939cfd545618",
        "Username": "User",
        "Email": "user@user.com",
        "Address": "Islamabad",
        "Password": "User1234",
        "Role": "User"
      },
      {
        "_id": "6389d894c14b939cfd54563c",
        "Username": "Shahzeb",
        "Email": "shah@gmail.com",
        "Address": "karachi",
        "Password": "Shah1234",
        "Role": "User"
      },
      {
        "_id": "6389d8bac14b939cfd54563f",
        "Username": "Hassan",
        "Email": "hassan@gmail.com",
        "Address": "Multan",
        "Password": "Hassan1234",
        "Role": "Admin"
      },
      {
        "_id": "6389df14c14b939cfd545652",
        "Username": "Admin",
        "Email": "admin@admin.com",
        "Address": "Lahore",
        "Password": "Admin1234",
        "Role": "Admin"
      }
    ];
    service.postUserInfo(data).subscribe((res) => {
      expect(res).toEqual(mockUsers)
    });

    const req = httpController.expectOne({
      method: 'Post',
      url: `${url}`,
    });
    req.flush(mockUsers)
  });
  it('should call updateuserinfo and return the updated Users from the API', () => {
    let mockUsers = [
      {
        "_id": "6389d82ec14b939cfd545618",
        "Username": "User",
        "Email": "user@user.com",
        "Address": "Islamabad",
        "Password": "User1234",
        "Role": "User"
      },
      {
        "_id": "6389d894c14b939cfd54563c",
        "Username": "Shahzeb",
        "Email": "shah@gmail.com",
        "Address": "karachi",
        "Password": "Shah1234",
        "Role": "User"
      },
      {
        "_id": "6389d8bac14b939cfd54563f",
        "Username": "Hassan",
        "Email": "hassan@gmail.com",
        "Address": "Multan",
        "Password": "Hassan1234",
        "Role": "Admin"
      },
      {
        "_id": "6389df14c14b939cfd545652",
        "Username": "Admin",
        "Email": "admin@admin.com",
        "Address": "Lahore",
        "Password": "Admin1234",
        "Role": "Admin"
      }
    ];
    service.putUserInfo(data, _id).subscribe((res) => {
      expect(res).toEqual(mockUsers)
    });

    const req = httpController.expectOne({
      method: 'Put',
      url: `${url}${_id}`,
    });
    req.flush(mockUsers)
  });
  it('should call deleteUser and delete User by Id', () => {
    let mockUsers = [
      {
        "_id": "6389d82ec14b939cfd545618",
        "Username": "User",
        "Email": "user@user.com",
        "Address": "Islamabad",
        "Password": "User1234",
        "Role": "User"
      },
      {
        "_id": "6389d894c14b939cfd54563c",
        "Username": "Shahzeb",
        "Email": "shah@gmail.com",
        "Address": "karachi",
        "Password": "Shah1234",
        "Role": "User"
      },
      {
        "_id": "6389d8bac14b939cfd54563f",
        "Username": "Hassan",
        "Email": "hassan@gmail.com",
        "Address": "Multan",
        "Password": "Hassan1234",
        "Role": "Admin"
      },
      {
        "_id": "6389df14c14b939cfd545652",
        "Username": "Admin",
        "Email": "admin@admin.com",
        "Address": "Lahore",
        "Password": "Admin1234",
        "Role": "Admin"
      }
    ];
    service.deleteUserInfo(_id).subscribe((res) => {
      expect(res).toEqual(mockUsers)
    });

    const req = httpController.expectOne({
      method: 'Delete',
      url: `${url}${_id}`,
    });
    req.flush(mockUsers)
  });
});
