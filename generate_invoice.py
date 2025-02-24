from fpdf import FPDF
import math
class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 16)
        self.cell(200, 10, "Invoice", ln=True, align="C")
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 10)
        self.cell(0, 10, "Thank you for your business.", align="C")

    def nb_lines(self, width, text):
        # Approximate number of lines the text will occupy in a cell of given width.
        # This method splits on newlines and estimates wrapping by character count.
        if not text:
            return 1
        # Get an approximate average character width using a reference character.
        avg_char_width = self.get_string_width("W")
        if avg_char_width == 0:
            avg_char_width = self.font_size  # fallback
        # Calculate maximum characters that can fit in one line.
        max_chars = int(width / avg_char_width)
        line_count = 0
        for line in text.split("\n"):
            # Avoid division by zero.
            if max_chars > 0:
                line_count += math.ceil(len(line) / max_chars)
            else:
                line_count += 1
        return line_count

    def multi_cell_row(self, col_widths, row_data, border=1, align="L"):
        line_height = self.font_size * 2
        # Calculate maximum number of lines among all cells in the row.
        lines_per_cell = [self.nb_lines(width, text) for text, width in zip(row_data, col_widths)]
        max_lines = max(lines_per_cell)
        row_height = line_height * max_lines
        y_start = self.get_y()
        
        # Draw each cell with the same row height.
        for col, (text, width) in enumerate(zip(row_data, col_widths)):
            x_start = self.get_x()
            # Print the cell text using MultiCell without border.
            self.multi_cell(width, line_height, text, border=0, align=align)
            # Reset the cursor to the top of the row for the next cell.
            self.set_xy(x_start + width, y_start)
            # Draw the border for this cell.
            self.rect(x_start, y_start, width, row_height)
        
        # Move to next row.
        self.ln(row_height)

pdf = PDF()
pdf.add_page()
pdf.set_font("Arial", "", 12)

# Invoice Header
# pdf.cell(200, 8, "From:", ln=True)
# pdf.set_font("Arial", "B", 12)
# pdf.cell(200, 8, "Jordache Mackenzie", ln=True)
# pdf.set_font("Arial", "", 12)
# pdf.cell(200, 8, "hello@jordachemac.com", ln=True)
# pdf.cell(200, 8, "021959716", ln=True)

# Recipient
pdf.cell(200, 8, "To:", ln=True)
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 8, "NZ Organics Group", ln=True)
pdf.set_font("Arial", "", 12)

# Invoice Details
pdf.ln(10)
pdf.cell(200, 8, "Invoice Number: INV-93001", ln=True)
pdf.cell(200, 8, "Date: 13/02/2025", ln=True)
pdf.cell(200, 8, "Due Date: 27/02/2025", ln=True)

# Table
pdf.ln(10)
pdf.set_font("Arial", "B", 12)
col_widths = [50, 100, 40]
pdf.multi_cell_row(col_widths, ["Item", "Description", "Amount"], border=1, align="C")

pdf.set_font("Arial", "", 12)
pdf.multi_cell_row(col_widths, ["Website Setup", "Initial setup, domain configuration, hosting setup, CMS installation", "$800.00"], border=1)
pdf.multi_cell_row(col_widths, ["Consultation & Planning", "Initial discussions, project planning, and recommendations", "$245.00"], border=1)

# Total Amount Due
pdf.ln(10)
pdf.set_font("Arial", "B", 12)
# Position the total line in the amount column of the table.
x_pos = pdf.l_margin + sum(col_widths[:2])
pdf.set_xy(x_pos, pdf.get_y() - (pdf.font_size * 2))
pdf.cell(col_widths[2], pdf.font_size * 2, "Total Amount Due: $1,045.00", border=0, ln=True, align="R")

# Payment Details
pdf.ln(10)
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 8, "Payment Details:", ln=True)
pdf.set_font("Arial", "", 12)
pdf.cell(200, 8, "Bank Transfer: 06-0201-0249697-01", ln=True)

# Closing
pdf.ln(10)
pdf.cell(200, 8, "Please make payment by the due date. If you have any questions, feel free to contact me.", ln=True)
pdf.ln(10)
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 8, "Jordache Mackenzie", ln=True)
pdf.set_font("Arial", "", 12)
pdf.cell(200, 8, "hello@jordachemac.com", ln=True)
pdf.cell(200, 8, "021959716", ln=True)

# Save PDF
pdf.output("invoice_INV-93001.pdf")
print("Invoice saved as invoice_INV-93001.pdf")