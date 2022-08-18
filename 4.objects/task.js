function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;//ваш код
}

let st1 = new Student('vasya','male',25);
let st2 = new Student('vasya1','male',25);
let st3 = new Student('vasya2','male',25);

st1.setSubject("fckng_serious?");

Student.prototype.addMark = function (mark) {
if(!this?.marks)
/*  if(this.marks === undefined) */{ 
    this.marks = [mark];// добавить первую оценку 
  } else {
    this.marks.push(mark);// добавить вторую и последующие оценки в массив
  };//ваш код
}

Student.prototype.addMarks = function (...marks) {
/* if(this?.marks) */
if(!this?.marks){ 
    this.marks = [].concat(marks)
    // добавить первую оценку 
  } else {
    this.marks = this.marks.concat(marks);// добавить вторую и последующие оценки в массив
  };//ваш код
}

Student.prototype.getAverage = function () {
if(!this?.marks) {
 return null;
}
else {
  return (this.marks.reduce((previous,next) => previous+next))/(this.marks.length);
  
}
}

Student.prototype.exclude = function(reason) {
 delete this.subject;
 delete this.marks;
 this.excluded = reason;
}
