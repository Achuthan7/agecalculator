function calculateAge()
{
    var today=new Date();
    var bdate=new Date(document.getElementById('bday').value);
    const bd=bdate.getDate();
    const bm=bdate.getMonth()+1;
    const by=bdate.getFullYear()+1;
    const cd=today.getDate();
    const cm=today.getMonth();
    const cy=today.getFullYear();
    var age=cy-by;

    if(bm<cm && by<cy)
    {
        document.getElementById('res').innerText=`Age:${age+1}`;
    }
    if(by>cy)
    {
        alert("Enter a valid DOB");
    }
   else
   {
    document.getElementById('res').innerText=`Age:${age}`;
   }

}
document.getElementById('clicker').addEventListener('click',calculateAge);
