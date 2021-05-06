 
 Vue.component('students-list', {
    data() {
       return {
            title: 'Front End Pro',
            dateCreate: new Date().toISOString().slice(0, 10),
            students: [
                {
                    name: 'Valera',
                    lastName: 'Ternavsky',
                    age: 48
                },
                {
                    name: 'Pety',
                    lastName: 'Petrov',
                    age: 35
                },
            ],
            createdStudent: {
                name: '',
                lastName: '',
                age: 0
            },
            selectedStudentName: ''
       }
    },
    methods: {
        addStudent() {
            console.log(this.createdStudent, 'createdStudent');
            this.students.push(this.createdStudent);
            

            this.resetCreatedStudent();
        },
        resetCreatedStudent() {
            this.createdStudent = {
                name: '',
                lastName: '',
                age: ''
            };
        },
        changeSelectedStudentName(name) {
            console.log('call fron Parent(student-list) compoenent', name);
            this.selectedStudentName = name;
        }
    },
    template: `
    <div class="students-list">
        <h3 class="student-list__title">
            {{title}}, <br /> {{dateCreate}}
        </h3>
        <div class="students__content">
            <student 
                v-for="student in students"
                :name="student.name"
                :lastName="student.lastName"
                :age="student.age"
                @foo="changeSelectedStudentName"
            ></student>
        </div>
        <div class="selected-student-conatainer">
            <selected-student :selectedName="selectedStudentName"></selected-student>
        </div>
        <div class="add-student">
            <input type="text" v-model="createdStudent.name"     placeholder="name">
            <input type="text" v-model="createdStudent.lastName" placeholder="lastName">
            <input type="text" v-model="createdStudent.age"     placeholder="age">
            <button @click="addStudent"> add </button>
        </div>
    </div>
    `
});

// function studen(name, lastName, age) {

// }
// studen(1, 2,)
Vue.component('student', {
    // props: ['name', 'lastName', 'age'],
    props: {
        name: String,
        lastName: String,
        age: Number
    },
    data() {
       return {
       }
    },
    methods: {
        selectName() {
            console.log(this.name, 'call from student compoenent');

            this.$emit('foo', this.name);
        }
    },
    template: `
    <div class="student">
        <span @click="selectName">{{ name }}</span>,
        {{lastName}},
        {{age}}
    </div>
    
    `
});


Vue.component('selected-student', {
    props: {
        selectedName: String
    },
    data() {
       return {
       }
    },
    methods: {

    },
    template: `
    <div class="selected-student">
        selected student name: {{ selectedName }}
    </div>
    
    `
});
  
// v-if, v-show
const vue = new Vue({
    el: '#app',
    data: {
        foo: 123
    }
});



