import { model, Schema, Document } from 'mongoose';

interface IActivity extends Document{
    title: string;
    done: boolean;
    deadline: Date;
    notification: {
        method: string[];
        when: string;
        repeat: string;
    };
    participants: {
        username: string;
        email: string;
        status: string;
    }[];
    subActivitiesIDs: string[];
}

const ActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    notification: {
        method: {
            type: [String],
            required: true
        },
        when: {
            type: String,
            required: true
        },
        repeat: {
            type: String,
            required: true
        }
    },
    participants: {
        type: [{
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },  
            status: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    subActivitiesIDs: {
        type: [String],
        required: true
    }
});

export default model<IActivity>('Activity', ActivitySchema);