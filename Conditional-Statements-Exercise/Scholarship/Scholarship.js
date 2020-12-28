function solve(income, results, minimalSalary) {
    income = Number(income);
    results = Number(results);
    minimalSalery = Number(minimalSalary);
 
    let socialScolarship = 0;
    let excelentResultsScholarship = 0;
 
    if (income < minimalSalary && results > 4.50) {
        socialScolarship = minimalSalary * 0.35;
    }
    if (results >= 5.50) {
        excelentResultsScholarship = results * 25;
    }
   
    if (socialScolarship > excelentResultsScholarship) {
    console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`)
   
    } else if (excelentResultsScholarship > socialScolarship) {
    console.log(`You get a scholarship for excellent results ${Math.floor(excelentResultsScholarship)} BGN`);;
       
    } else {
        console.log("You cannot get a scholarship!");
       
    }
 
}