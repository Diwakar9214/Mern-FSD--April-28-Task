 const resume={
    "Name":"Diwakar p",
    "Contact":{
        "Email":"N.diwakar92@gmail.com",
        "Phone":"9600069351",
        "Address":"4 2 Main Road, Ellaiamman nagarr,korattur,chennai-76"
    },
    "CAREER OBJECTIVE":"My intention at this step would be to learn new things related to my profession. As it is a technical field, one has to be updated because the technology changes often. It is my responsibility to learn and adopt the new technology. It would be profitable for me as well as for my company.",
    "Technical skill":[
	"Operating System:Windows7,8,10,11",
	"Programming Languages:C, C++, Java, Javascript,HTML,CSS.",
	"Database: SQL.",
	"Software packages: MS-Office, Acronis,Hik Vision CCTV." ],
    "EXPERIENCE-SUMMARY":"Workspace Solution Pvt Ltd(Club House Branch) as IT Executive for 1 year ",
    "Roles-responsibilities":[
    "Installing, configuring, and supporting an organization's local area network (LAN), wide area network (WAN), and internet system",
    "Maintaining network hardware and equipment like routers, switches, firewalls, and servers",
    "Troubleshooting network problems and outages",
    "Upgrading networks and monitoring network performance",
    "Ensuring network security, connectivity, speed, and availability",
    "Designing and rolling out network architectures, topologies, hardware, and software",
    "Managing network infrastructure changes and updates",
    "Training staff on how to use new network resources and programs",
    "Documenting network operational procedures and developing disaster recovery plans",
    "Project planning and management skills",
    "Maintaining and administering computer networks, including hardware, software applications and configurations",
    "Troubleshooting, diagnosing and finding solutions to potential network and system issues",
    "Monitoring performance and ensuring system availability and reliability"
    ],
    "EXPERIENCE SUMMARY":"Workspace Solution Pvt Ltd(Club House Branch) as IT Executive for 1 year ",
    "Roles and responsibilities":
    [
        "Backup Management, Reporting, Recovery and Disaster Recovery using Vertix Tool",
        "Install and configure software and hardware",
        "Manage network servers and technology tools",
        "Set up accounts and workstations",
        "Monitor performance and maintain systems according to requirements",
        "Troubleshoot issues and outages",
        "Ensure security through access controls, backups and firewalls",
        "Upgrade systems with new releases and models",
        "Develop expertise to train staff on new technologies",
        "Through Hyatt IT support portal user will make complaint 6 it is solve and new service request by Hyatt system access application request and access will granted.",
        "Troubleshooting Networking Printer 6 usb Printer problems"

    ],
    "Educational Qualification":"BSC (Computer Science)  D.G.Vaishnav College, Chennai, Secured 73.28% (2013)",
    "Hobbies":"Browsing, Listening music & Playing Cricket"

}
//for loop
console.log("For loop");
for(let i = 0; i < resume.length; i++) {
    let obj = json[i];

    console.log(resume.Contact);
}

// For .. in loop
console.log("For .. in loop");
for (const key in resume.Contact) {  
        const element = resume.Contact[key];
        console.log(element);
    }
// For .. of loop
console.log("For of loop");
    for (const [key, value] of Object.entries(resume)) {
        console.log(`${key}: ${value}`);
    }

// For Each loop
console.log("For each loop");

Object.keys(resume).forEach(key => {
    console.log(`${key}: ${resume[key]}`);
});