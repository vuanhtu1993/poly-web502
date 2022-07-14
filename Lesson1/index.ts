// Buổi 1
// Cài đặt Nodejs Typescript, ts-node ...
// Variable trong TS
let a:number;
let b:number;
let c: any;
a = 10;
// b = "Hello các bạn"
c = true;
// Function trong TS cần phải khai báo kiểu tham số và đầu ra
function greeting():void {
    console.log('Xin chao cac ban')
}

function perimeter(radius: number):number {
    return radius * 2 * 3.14
}

//Buổi 2: Cacs kiểu dự liệu mới
// 1. Phân biệt giữa let const và var


// 2. Khai báo một array function
// 3. Kiểu mảng Array (một mảng chứa 1 loại data type)
var arrNumber: number[];
arrNumber = [1, 2, 3, 4, 5, 6]
// console.log(arrNumber)

// 4. Kiểu Enum
enum khuvuc {
    mienBac = 100,
    mienNam,
    mienTrung
}

enum Field {
    economic,
    informationSystem,
    merchanic
}

// console.log(Field.informationSystem)
// console.log(khuvuc.mienNam)

// 5. Kiểu tuple
var sinhvien: [string, number, boolean, boolean];
sinhvien = ["Kien", 20, true, true]
// console.log(typeof(sinhvien))

// 6. Ép kiểu dữ liệu, (chuyển giới)
let y: any = "10"
let z = Number(y) + 20
// console.log(z)


// let z: number = 10
// console.log(z + "20")

// 7. Tổng kết phần kiểu dữ liệu
// Typescript sẽ khiến cho việc code trên nên đơn giản hơn
// Phù hợp với các dự án lớn vì đã quy định các kiểu dữ liệu rõ ràng - Nghiêm khắc trong kiểu dữ liệu

// 8. Kiểu union (alias)
let hobby: string | number
hobby = "My hobby"
hobby = 1000
let price: number | string;
price = 1000000
function showPrice(price: number):string {
    return ""
}

// 9. Function (Hàm)
// Tại sao cần sử dụng hàm
// Tham số và đối sổ hàm là gì?
// Giá trị trả về của hàm

// 10.Lập trình hướng đối tượng OOP
// Mô phỏng sự vật ngoài đời thực và mô tả hoá nó trong code
// 1. Tính trừu tượng:
// 2. Tính kế thừa:
// 3. Tính bao đóng
// Tạo ra một class
class Person {
    name: string;
    public age: number;
    walk():void {

    }
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    getAge():void {
        console.log(this.age)
    };
}

const student = new Student("Van Anh", 20)
student.age = 30
console.log(student.age)