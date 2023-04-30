import Agecalcimg from "../../Assets/Images/agecalc.png"
import percenageimg from "../../Assets/Images/percentageimg.png"
import everageimg from "../../Assets/Images/Avenrage.png"
import intervalimg from "../../Assets/Images/everage.png"
import taximg from "../../Assets/Images/tax.png"
import margincalcimg from "../../Assets/Images/margin.png"
import probabiltyimg from "../../Assets/Images/probability.png"
import paypalimg from "../../Assets/Images/paypal.png"
import shareimg from "../../Assets/Images/eds.png"
import cpmimg from "../../Assets/Images/cpm.png"
import loanimg from "../../Assets/Images/loanimg.png"
import gstimg from "../../Assets/Images/gst.png"
import bmiimg from "../../Assets/Images/bmi.png"

export const Calculatortext = () => {
    return (
        [
            {
                id: 1,
                smalltext: Agecalcimg,
                more: "Age Calculator",
                route: "/Agecalc/Agecalc"
            },
            {
                smalltext: percenageimg,
                more: "Percentage Calculator",
                route: "/Percentagecalc/Percentagecalc"
            },
            {
                smalltext: everageimg,
                more: "Average Calculator",
                route: "/Averagecalc/Averagecalc"
            },
            {
                smalltext: intervalimg,
                more: "Confidence Interval Calculator",
                route: "/Confidencecalc/Confidencecalc"
            },
            {
                smalltext: taximg,
                more: "Sales Tax Calculator",
                route: "/Salestextcalc/Salestextcalc"
            },
            {
                smalltext: margincalcimg,
                more: "Margin Calculator",
                route: "/Margincalc/Margincalc"
            },
            {
                smalltext: probabiltyimg,
                more: "Probability Calculator",
                route: "/Probabilitycalc/Probabilitycalc"
            },
            {
                smalltext: paypalimg,
                more: "Paypal Fee Calculator",
                route: "/Paypalcalc/Paypalcalc"
            },
            {
                smalltext: percenageimg,
                more: " Discount Calculator",
                route: "/Discountcalc/Discountcalc"
            },
            {
                smalltext: shareimg,
                more: "Earnings Per Share Calculator",
                route: "/Earningscalc/Earningscalc"
            },
            {
                smalltext: cpmimg,
                more: "CPM Calculator",
                route: "/Cpmcalc/Cpmcalc"
            },
            {
                smalltext: loanimg,
                more: "Loan To Value Calculator",
                route: "/Loanvaluecalc/Loanvaluecalc"
            },
            {
                smalltext: gstimg,
                more: "GST Calculator",
                route: "/Gstcalc/Gstcalc"
            },
            {
                smalltext: bmiimg,
                more: "BMI Calculator",
                route: "/Bicalc/Bicalc"
            },
        ]
    )
}

