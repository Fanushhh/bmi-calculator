export const websiteData = {
    hero: {
        img:'./images/logo.svg',
        title:'Body Mass Index Calculator',
        description:'Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.'
        
    },
    calculator: {
        title:'Enter your details below',
        metric:{
            measurement1:'Metric',
            measurement2:'Imperial',
            label1:'Weight',
            label2:'Weight',
            height:'cm',
            weight:'kg',
        },
        result:{
            title:'Your BMI is...',
            prompt: 'Enter your height and weight above so you can get a result here.',
            positiveResult:'Your weight is in the Healthy Weight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness. ',
            overWeight:'Your BMI suggests you’re a unhealthy weight. Your ideal BMI is between 18.5–24.9.',
        }
    },
    BMIResultSection:{
        img:'/images/image-man-eating.webp',
        title:'What your BMI result means',
        description:"A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.",
    },
    recommendations:[{
        img:'/images/icon-eating.svg',
        title:'Healthy eating',
        description:'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
    },
    {
        img:'/images/icon-exercise.svg',
        title:'Regular exercise',
        description:'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
    },
    {
        img:'/images/icon-sleep.svg',
        title:'Adequate sleep',
        description:'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
    },
   ],
   limitations:[
    {
        icon:'/images/icon-gender.svg',
        title:'Gender',
        description:"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
        position:'lg:col-start-5 lg:col-end-7',
    },
    {
        icon:'/images/icon-age.svg',
        title:'Age',
        description:"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
        position:'lg:row-start-2 lg:col-start-4 lg:col-end-7',
    },
    {
        icon:'/images/icon-muscle.svg',
        title:'Muscle',
        description:"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
        position:'lg:row-start-2 lg:col-start-7 lg:col-end-8',
    },
    {
        icon:'/images/icon-pregnancy.svg',
        title:'Pregnancy',
        description:"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
        position:'lg:row-start-3 lg:col-start-2 lg:col-end-4',
    },
    {
        icon:'/images/icon-race.svg',
        title:'Race',
        description:"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
        position:'lg:row-start-3 lg:col-start-5 lg:col-end-7',
    },
    
]
}