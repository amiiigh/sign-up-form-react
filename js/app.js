const sign_up_header = React.createElement(
    'div',
    {
        className:"sign-up-header"
    }
)

const sign_up_bottom = React.createElement(
  'div',
    {
        className:"sign-up-bottom"
    },
)

const env_icon = React.createElement(
    'i',
    {
        className:"fa fa-envelope"
    }
)

const lock_icon = React.createElement(
    'i',
    {
        className:"fa fa-lock"
    }
)



const form_input_email = React.createElement(
    'div',
    {
        className:"pad"
    },
    React.createElement(
        'div',
        {
            className:"input-group",style: {direction:'ltr'}
        },
        React.createElement(
            'span',
            {
                className:"input-group-addon"
            },
            env_icon
        ),
        React.createElement(
            'input',
            {
                className:"form-control",
                type:"email",
                placeholder:"ایمیل",
                id:"email"
            }
        )
    )
)

const form_input_password = React.createElement(
    'div',
    {
        className:"pad"
    },
    React.createElement(
        'div',
        {
            className:"input-group",
            style:{direction:'ltr'}
        },
        React.createElement(
            'span',
            {
                className:"input-group-addon"
            },
            lock_icon
        ),

        React.createElement(
            'input',
            {
                className:"form-control",
                type:"password",
                placeholder:"گذرواژه",
                id:"pass"
            }
        )
    )
)


const form_submit = React.createElement(
    'div',
    {
        className: "pad"
    },
    React.createElement(
        'input',
        {
            value:"ثبت نام",
            className:"btn btn-default btn-block",
            id:"sub"
        }
    )
)


const sign_up_form = React.createElement(
    'form',
    {},
    form_input_email,
    form_input_password,
    form_submit
)
const box = React.createElement(
    'div',
    {
        className:"box",
    },
    sign_up_form
)
const container = React.createElement(
    'div',
    {
        className: "col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-12"
    },
    sign_up_header,
    box,
    sign_up_bottom
)
ReactDOM.render(
    container,
    document.getElementById('app')
)

let register = function () {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    console.log("register for "+email + " " + pass);
};

document.getElementById("sub").addEventListener("click", register);