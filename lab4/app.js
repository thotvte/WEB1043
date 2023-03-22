class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getCurrentAgeInYears() {
      const today = new Date();
      let age = today.getFullYear() - this.dob.getFullYear();
      const monthDiff = today.getMonth() - this.dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dob.getDate())) {
        age--;
      }
      return age;
    }
  
    getCurrentAgeInDays() {
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date();
      const diffDays = Math.round(Math.abs((this.dob.getTime() - today.getTime()) / oneDay));
      return diffDays;
    }
  }
  
  // Tạo danh sách sinh viên
  const studentList = [
    new Student(1, 'Truong', 'Van Thọ', 'IT18301', 'vantho@gmail.com', '0123456789', '2003-09-21'),
    new Student(2, 'Tran', 'Thi Nho', 'IT18302', 'thinho@email.com', '0123456789', '2004-02-02'),
    new Student(3, 'Le', 'Van Dung', 'IT18301', 'vandung@email.com', '0123456789', '2001-05-02'),
    new Student(4, 'Pham', 'Thi Thanh', 'IT18302', 'thithanh@example.com', '0123456789', '2000-09-21'),
    new Student(5, 'Nguyen', 'Kinh Thanh', 'IT18301', 'kinhthanh@gmail.com', '0123456789', '2002-02-13'),
  ];
  
  // Sắp xếp theo số tuổi (theo ngày) từ thấp đến cao
  studentList.sort((a, b) => a.getCurrentAgeInDays() - b.getCurrentAgeInDays());
  
  // In danh sách sinh viên
  console.log('Danh sách sinh viên:');
  studentList.forEach(student => {
    console.log(`- ${student.getFullName()} (${student.getCurrentAgeInYears()} tuổi; ${student.getCurrentAgeInDays()} ngày tuổi)`);
  });
  
  // In width và height của màn hình
  console.log(`Kích thước màn hình: ${window.innerWidth} x ${window.innerHeight}`);