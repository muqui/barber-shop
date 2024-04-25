export const validate = (data) => {
    let errors = {};

    if (!data.subject.trim()) {
        errors.subject = 'Subject is required';
    }

    if (!data.date) {
        errors.date = 'Date is required';
    } else {
        const currentDate = new Date();
        const inputDate = new Date(data.date);

        if (inputDate <= currentDate) {
            errors.date = 'Date must be after today';
        }
    }

    if (!data.time) {
        errors.time = 'Time is required';
    } else {
        const inputTime = parseInt(data.time.split(':')[0], 10);
        if (inputTime < 10 || inputTime >= 19) {
            errors.time = 'Time must be between 10:00 and 18:59';
        }
    }

    return errors;
};
