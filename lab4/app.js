class Student {
  constructor(id, first_name, last_name, class_id, email, soDienthoai, dob) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.class_id = class_id;
    this.email = email;
    this.soDienthoai = soDienthoai;
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

// Tao danh sach 5 sinh viên
const studentList = [];

for (let i = 1; i <= 5; i++) {
  const id = i;
  const first_name = prompt(`Nhập tên của sinh viên thứ ${i}:`);
  const last_name = prompt(`Nhập họ của sinh viên thứ ${i}:`);
  const class_id = prompt(`Nhập mã lớp của sinh viên thứ ${i}:`);
  const email = prompt(`Nhập email của sinh viên thứ ${i}:`);
  const soDienthoai = prompt(`Nhập số điện thoại của sinh viên thứ ${i}:`);
  const dob = prompt(`Nhập ngày sinh của sinh viên thứ ${i} (theo định dạng yyyy-mm-dd):`);

  studentList.push(new Student(id, first_name, last_name, class_id, email, soDienthoai, dob));
}

// sap xep tuoi theo ngay tu thap den cao 
studentList.sort((a, b) => a.getCurrentAgeInDays() - b.getCurrentAgeInDays());

// In danh sach sinh vien 
console.log('Danh sách sinh viên:');
studentList.forEach(student => {
  console.log(`- ${student.getFullName()} (${student.getCurrentAgeInYears()} tuổi; ${student.getCurrentAgeInDays()} ngày tuổi)`);
});
// In width và height cua man hinh
console.log(`Kích thước màn hình: ${window.innerWidth} x ${window.innerHeight}`);
console.log("haha");