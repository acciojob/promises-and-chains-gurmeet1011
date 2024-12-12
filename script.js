//your JS code here. If required.
const form=document.getElementById('simpleForm');
const nameInput=document.getElementById('name');
const ageInput=document.getElementById('age');

form.addEventListener('submit',(event)=>{
	event.preventDefault();

	const name=nameInput.value.trim();
	const age=parseInt(ageInput.value,10);

	if(!name || isNaN(age))
	{
		alert("please fill in all fields.");
		return;
	}
	     const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000); // 4 seconds delay
      });

      ageValidationPromise
        .then(() => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        });
    });