import React, { useEffect, useState } from 'react';
import { DefaultApi, Item } from './client-generated';  // Adjust the path as necessary
import { Button, Table } from 'react-bootstrap';

const ItemsList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const api = new DefaultApi();

        api.itemsGet()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                setError('Failed to fetch items');
                console.error('API call failed:', error);
            });
    }, []);

    const handleDelete = (id: string) => {
        const api = new DefaultApi();
        api.itemsIdDelete(id)
            .then(() => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch((error) => {
                setError('Failed to delete item');
                console.error('API call failed:', error);
            });
    };

    const handleEdit = (id: string) => {
        // Implement edit functionality, e.g., navigate to an edit form
        console.log(`Edit item with ID: ${id}`);
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h1>Items List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    className="mr-2"
                                    onClick={() => handleEdit(item.id!)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(item.id!)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ItemsList;
