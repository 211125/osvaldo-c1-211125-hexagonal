import { query } from "../../../database/sequelize"

export async function validateReviewConditions(id_user: string, id_book: string) {
    const checkIfUserExistsSql = `
        SELECT COUNT(*) as userCount
        FROM users
        WHERE id = ?;
    `;
    const [userResults]: any = await query(checkIfUserExistsSql, [id_user]);
    if (userResults[0].userCount === 0) {
        throw new Error("User not found");
    }

    const checkIfBookExistsSql = `
        SELECT COUNT(*) as bookCount
        FROM books
        WHERE id = ?;
    `;
    const [bookResults]: any = await query(checkIfBookExistsSql, [id_book]);
    if (bookResults[0].bookCount === 0) {
        throw new Error("Book not found");
    }

    const checkIfBorrowedSql = `
        SELECT COUNT(*) as count
        FROM loans
        WHERE id_user = ? AND id_book = ?;
    `;
    const [borrowedResults]: any = await query(checkIfBorrowedSql, [id_user, id_book]);
    if (borrowedResults[0].count === 0) {
        console.log("El usuario no ha prestado el libro, por lo que no puede hacer una revisión.");
        return "El usuario no ha prestado el libro, por lo que no puede hacer una revisión.";
    }

    const checkIfReturnedSql = `
        SELECT COUNT(*) as count
        FROM loans
        WHERE id_user = ? AND id_book = ? AND status = TRUE;
    `;
    const [notReturnedResults]: any = await query(checkIfReturnedSql, [id_user, id_book]);
    if (notReturnedResults[0].count > 0) {
        console.log("El usuario no ha devuelto el libro, por lo que no puede hacer una revisión.");
        return "El usuario no ha devuelto el libro, por lo que no puede hacer una revisión.";
    }
}

export async function validateUserExist(id_user: string) {
    const checkIfUserExistsSql = `
        SELECT COUNT(*) as userCount
        FROM users
        WHERE id = ?;
    `;
    const [userResults]: any = await query(checkIfUserExistsSql, [id_user]);
    if (userResults[0].userCount === 0) {
        throw new Error("User not found");
    }
}

export async function validateReviewExist(id_review: string) {
    const checkIfReviewExistsSql = `
        SELECT COUNT(*) as reviewCount
        FROM reviews
        WHERE id = ?;
    `;
    const [reviewResults]: any = await query(checkIfReviewExistsSql, [id_review]);
    if (reviewResults[0].reviewCount === 0) {
        throw new Error("Review not found");
    }
}
