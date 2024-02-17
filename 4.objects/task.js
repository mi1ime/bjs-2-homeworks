function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = []
}

let student1 = new Student();
let student2 = new Student();
let student3 = new Student();
let student4 = new Student();

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks !== undefined) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	} else {
		let sum = 0;
		for (let i = 0; i < this.marks.length; i += 1) {
			sum += this.marks[i];
		}
		return sum / this.marks.length;
	};
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}