import {UserFetched} from "@/app/(tabs)/type-def";
import { View, Text } from "react-native";
type ShowUserProps = {
    userFetched: UserFetched;
};

export default function ShowUser({ userFetched }: ShowUserProps) {
    if (userFetched.error) {
        return (
            <Text style={{ color: 'red', padding: 10 }}>
                Error fetching user data: {userFetched.error}
            </Text>
        );
    }

    if (userFetched.user) {
        const user = userFetched.user;
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    User data fetched from remote source:
                </Text>
                <Text>Id: {user.id}</Text>
                <Text>Name: {user.name}</Text>
                <Text>Company: {user.company.name}</Text>
                <Text>Username: {user.username}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Address: {user.address.street}</Text>
                <Text>Zip: {user.zip}</Text>
                <Text>State: {user.state}</Text>
                <Text>Country: {user.country}</Text>
                <Text>Phone: {user.phone}</Text>
                <Text>Photo: {user.photo}</Text>
            </View>
        );
    }

    // Fallback if there's no user or error
    return (
        <Text style={{ color: 'gray', padding: 10 }}>
            No data to display.
        </Text>
    );
}


