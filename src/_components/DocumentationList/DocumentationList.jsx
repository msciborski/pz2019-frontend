import React, { Component } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { patientActions } from "../../_actions";
import { config } from "../../config";

class DocumentationList extends Component {
  componentDidMount() {
    const { getDocumentation, user } = this.props;

    getDocumentation(user.id);
  }

  render() {
    const { documentation } = this.props;

    return (
      documentation ?
        <Table>
          <TableHead>
            <TableCell>Id</TableCell>
            <TableCell>File name</TableCell>
            <TableCell>Extension</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Upload date</TableCell>
            <TableCell>Download</TableCell>
          </TableHead>
          <TableBody>
            {documentation.map(doc => {
              const extension = doc.mimeType.split('/');

              return (
                <TableRow id={doc.id}>
                  <TableCell>
                    {doc.id}
                  </TableCell>
                  <TableCell>
                    {doc.filename}
                  </TableCell>
                  <TableCell>
                    {extension[1]}
                  </TableCell>
                  <TableCell>
                    {`${doc.author.name} ${doc.author.surname}`}
                  </TableCell>
                  <TableCell>
                    {new Date(doc.createdAt * 1000).toDateString()}
                  </TableCell>
                  <TableCell>
                    <Button><Link target="_blank" href={`${config.apiUrl}${doc.link}`} download>Download</Link></Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        :
        <></>
    )
  }
}

const mapStateToProps = state => {
  const { authentication, users, patients } = state;

  return {
    authUser: authentication.user.user,
    user: users.user,
    documentation: patients.documentation,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDocumentation: (patientId) => dispatch(patientActions.getPatientDocumentation(patientId)),
  };
}

const connectedDocumentationList = connect(mapStateToProps, mapDispatchToProps)(DocumentationList);
export { connectedDocumentationList as DocumentationList };
