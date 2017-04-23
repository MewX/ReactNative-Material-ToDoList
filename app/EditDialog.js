/**
 * Created by MewX on 4/24/2017.
 */

import * as React from "react";
import {Dialog, DialogDefaultActions} from "react-native-material-ui";
import {Text, TextInput, View} from "react-native";
import MaterialDialog from "react-native-material-dialog/src/MaterialDialog";

class EditDialog extends React.Component{

    static CHOICE_REMOVE = "Remove";
    static CHOICE_SAVE = "Save";
    static CHOICE_CANCEL = "Cancel";

    /**
     * The constructor
     * @param t the original text
     */
    constructor(t) {
        super();

        this.state = {
            text: t,
        };
    }

    render() {
        return (
            <View>
                {/*<Dialog>*/}
                    {/*<Dialog.Content>*/}
                        {/*<TextInput*/}
                            {/*style={{paddingLeft: 12, paddingRight: 12, fontSize: 16, borderColor: 'grey', borderWidth: 0}}*/}
                            {/*onChangeText={(text) => this.setState({edit: text})}*/}
                            {/*placeholder="What to do?"*/}
                            {/*value={this.state.edit}*/}
                            {/*onSubmitEditing={(event) => this.addNewItem(event.nativeEvent.text)}*/}
                        {/*/>*/}
                    {/*</Dialog.Content>*/}
                    {/*<Dialog.Actions>*/}
                        {/*<DialogDefaultActions*/}
                            {/*actions={[EditDialog.CHOICE_REMOVE, EditDialog.CHOICE_SAVE, EditDialog.CHOICE_CANCEL]}*/}
                            {/*onActionPress={() => {console.log(arguments)}}*/}
                        {/*/>*/}
                    {/*</Dialog.Actions>*/}
                {/*</Dialog>*/}

                <MaterialDialog
                    visible={this.state.basicCustomColorsVisible}
                    title={'Save the conversation?'}
                    titleColor="#FF4081"
                    colorAccent="#FF4081"
                    okLabel="DELETE"
                    onOk={() => {
                        // todo: delete
                        ToastAndroid.show('Pressed SAVE', ToastAndroid.SHORT);
                        this.setState({ basicCustomColorsVisible: false });
                    }}
                    cancelLabel="UPDATE"
                    onCancel={() => {
                        // todo: update
                        ToastAndroid.show('Pressed DISCARD', ToastAndroid.SHORT);
                        this.setState({ basicCustomColorsVisible: false });
                    }}>
                    <Text style={styles.dialogText}>
                        Store the conversation log in Google Drive.
                    </Text>
                </MaterialDialog>
            </View>
        );
    }

    keyOperations(choice) {

    }

}

module.exports = EditDialog;

